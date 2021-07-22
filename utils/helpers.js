import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'Flashcards:notifications';

export async function clearLocalNotification() {
    try {
        await AsyncStorage.removeItem(NOTIFICATION_KEY);
    } catch(err) {
        console.error(err);
    }
    return Notifications.cancelAllScheduledNotificationsAsync();
}

function createNotification() {
    return {
        title: 'Flashcards Quiz Reminder!!',
        body: "👋 don't forget to take quiz for today!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    };
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
        if(data === null) {
            Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
                if(status === 'granted') {
                    Notifications.cancelAllScheduledNotificationsAsync();

                    let tomorrow = new Date();
                    tomorrow.setDate(tomorrow.getDate() + 1);
                    tomorrow.setHours(20);
                    tomorrow.setMinutes(0);

                    Notifications.scheduleLocalNotificationAsync(
                        createNotification(),
                        {
                            time: tomorrow,
                            repeat: 'day',
                        }
                    );
                    AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
                }
            })
            .catch((err) => {
                console.error(err);
            });
        }
    })
}
