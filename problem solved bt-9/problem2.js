function checkName(name) {
    /**
     * error handling korte hobe 
     */

    if(typeof name !== 'string') {
        return 'invalid input'
    }

    /**
     * jegulo input dibo oiguloke fast e lowerCase e convert korbo
     */
    name.toLowerCase;
    // jeta input nibo tar last latter take nibo jate 

    // let lastlatter = name.slice(-1)
    let lastlatter = name[name.length - 1];

    /**
     * zader diye check korte cacci tader ekta variable er vitore rekhe diye loop use korbo 
     */

    let totallastLatters = ['a', 'e', 'i', 'o', 'y', 'u'];

    // ekta variable nibo jetake return korbo
    let result = false;
    // using loop
    for (const latters of totallastLatters) {
        if (latters === lastlatter) {
            return ' Good Name'
        }
        else {
            return 'Bad Name';
        }

    }
    return result;

}
console.log(checkName('fahim'));
console.log(checkName('fahima'));
console.log(checkName(123));