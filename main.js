import inquirer from 'inquirer';
const counter = (paragraph) => {
    const charCount = paragraph.replace(/\s/g, "").length;
    const wordCount = paragraph.split(/\s+/).filter(word => word.length > 0).length;
    const numericCount = paragraph.replace(/\D/g, "").length;
    const spaceCount = paragraph.split(" ").length - 1; // Count spaces by splitting on space and subtracting 1
    return `Word Count: ${(wordCount)}\nCharacter Count: ${(charCount)}\nNumeric Character Count: ${(numericCount)}\nSpace Count: ${(spaceCount)}`;
};
async function startWordCounter(counter) {
    do {
        let res = await inquirer.prompt({
            type: "input",
            message: ("Write your paragraph here : "),
            name: "paragraph"
        });
        console.log(counter(res.paragraph));
        const { continueApp } = await inquirer.prompt({
            type: 'confirm',
            name: 'continueApp',
            message: ('Do you want to continue or Exit ?'),
            default: true,
        });
        if (!continueApp) {
            console.log('Exiting the application.');
            break;
        }
    } while (true);
}
startWordCounter(counter);
