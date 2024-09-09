const object = { Name: 'karimul', BirthYear: 1954, siteName: 'yahoogle' };
function password(obj) {
    if (obj.BirthYear.toString().length < 4 || obj.Name == undefined || obj.BirthYear == undefined || obj.siteName == undefined) {
        return 'Invalid data'

    }

    const channel = (obj.siteName[0].toUpperCase() + obj.siteName.slice(1));
    const result = channel + "#" + obj.BirthYear + "@" + obj.Name;
    return result
}
console.log(password(object));