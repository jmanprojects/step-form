import { Adds } from "../interfaces/adds-on.interface";
import { Plans } from "../interfaces/plans.interface";
import { User } from "../interfaces/user.interface";

export let user: User = {
    id: 0,
    name: '',
    email: '',
    phone: '',

};

export let planUserSelected: Plans = {
    id: 100,
    icon: '',
    plan: '',
    periodicitySelected: 0,
};

export let addsUserSelected: Adds[] = [
   
];


export let page: number []= [0];




