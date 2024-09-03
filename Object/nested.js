// nested ba shortcut technic use kore property and value access

const collage = {
    name : 'rpi',
    place : 'Jumma para',
    teachers : 150,
    technology :['computer','Electronics','Mechanical','Electrical','Civil'],
    group :{
        computer : [ 'A Group', 'B Group'],
        Mechanical : [ 'Group A', 'Group B'],
        Electrical : ['A Group', 'B Group'],
        shift :['1st', '2nd'],
        'time duration' : ['8am - 12pm' , '1pm - 6pm']
    }
  

}
// line by line object call
console.log(collage.name);
console.log(collage.place);
console.log(collage.teachers);
console.log(collage.group);
console.log(collage.group.Electrical);
console.log(collage.group.shift);
console.log(collage.group['time duration']);
console.log(collage.technology);


// technology er vitor value check korar jonne new ekta variable set kore sekhane store kore output dekha 
const teck =Object.values(collage.technology)
console.log(teck);

// // technology array er 2nd number value ke change korar jonne 
collage.technology[3] = 'Electromedical'





// // teacher er vitore value set ba change korar jonne
const member = 'teachers';
collage[member]= 360;
console.log(collage);

// // computer er vitore value chane korar jonne 
const comp = 'computer'
collage.group[comp] = 'mechanical'


// kono kichu delete korte caile 
delete collage.group

// // all output dekhar jonne
console.log(collage);