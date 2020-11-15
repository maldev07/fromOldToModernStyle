let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
let employersNames = employers.filter((item) => {
    return item.toLowerCase().length > 0 && item.toLowerCase() != '';
});
employersNames = employersNames.map((item) => item.toLowerCase().trim());

let sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

function calcCash({
    cash
} = {}, own = 0) {
    //! The first variant
    let total = own;
    total = cash.reduce(function (actualNumber, currentValue) {
        return actualNumber + currentValue;
    });
    return total;
    //! The second variant
    // cash.forEach((item) => {
    //     total += item;
    // });
}
let money = calcCash(sponsors, 0);

// -------------------------------------------------------------------------------------------------------

function makeBusiness({
    eu,
    rus
}, owner, money, empNames, director = 'Victor') {
    let euRus = [...eu, ...rus, 'unexpected sponsor'];
    // console.log(euRus);
    let message1 = `We have a business. Owner: ${owner}, director: ${director}. Our budget: ${money}. And our employers: ${empNames}.`;
    let message2 = `\nAnd we have a sponsor:\n${euRus}`;
    let message3 = `\nNote. Be careful with ${eu[0]}. It's a huge risk.`;
    console.log(message1, message2, message3);
}
makeBusiness(sponsors, 'Sam', money, employersNames);