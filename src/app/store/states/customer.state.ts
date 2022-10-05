import { Customer } from "../models/customer-list.model";
import  { v4 as uuidv4 } from 'uuid';

export interface CustomerState  {
  customer: Customer[]
}

export const initialState: CustomerState = 
{
  customer: [
    {
        'firstName': 'Desmond',
        'lastName': 'Cromwell',
        'status': 'pending'     
    },
    {
      'firstName': 'Fiona',
      'lastName': 'Wyatt',
      'status': 'active'     
    }, 
    {
      'firstName': 'Gordon',
      'lastName': 'Laker',
      'status': 'inactive'     
  },
  {
    'firstName': 'Julia',
    'lastName': 'Quirke',
    'status': 'active'     
  }, 
  {
    'firstName': 'Brian',
    'lastName': 'Nesbitt',
    'status': 'pending'     
    },
    {
      'firstName': 'Katie',
      'lastName': 'Rogan',
      'status': 'pending'     
    },{
      'firstName': 'Joe',
      'lastName': 'Hanson',
      'status': 'inactive'     
    },
    {
    'firstName': 'Paula',
    'lastName': 'Cooke',
    'status': 'active'     
    },{
      'firstName': 'Patrick',
      'lastName': 'Talbot',
      'status': 'pending'     
    },
    {
    'firstName': 'Angela',
    'lastName': 'Matthews',
    'status': 'pending'     
    },{
      'firstName': 'Edwin',
      'lastName': 'Newsome',
      'status': 'active'     
    },
    {
    'firstName': 'Elizabeth',
    'lastName': 'Kilroy',
    'status': 'pending'     
    },{
      'firstName': 'Jeffrey',
      'lastName': 'Jarvis',
      'status': 'active'     
    },
    {
    'firstName': 'Barbara',
    'lastName': 'Wyatt',
    'status': 'inactive'     
    },{
      'firstName': 'Oliver',
      'lastName': 'Jedson',
      'status': 'pending'     
    },
    {
    'firstName': 'Anthea',
    'lastName': 'Zimmerman',
    'status': 'inactive'     
    },{
      'firstName': 'Dwayne',
      'lastName': 'Monroe',
      'status': 'active'     
    },
    {
    'firstName': 'Helen',
    'lastName': 'Neilsen',
    'status': 'inactive'     
    },{
      'firstName': 'David',
      'lastName': 'Francis',
      'status': 'pending'     
    },
    {
    'firstName': 'Marilyn',
    'lastName': 'Jessop',
    'status': 'active'     
    },
    

   ],
}

