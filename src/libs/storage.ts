import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';

export interface PlantsProsp {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [ string ];
    frequency: {
        times: number,
        repeat_every: string;
    },
    dateTimeNotification: Date;
}