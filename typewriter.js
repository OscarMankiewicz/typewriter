const sentence = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium tincidunt est nec luctus. Maecenas sed arcu finibus, vehicula mi id, efficitur tellus. Proin vel augue sed nisi vehicula auctor at non felis. Fusce tincidunt semper iaculis. Etiam imperdiet orci a dolor blandit fringilla et ut sem. Sed aliquam sapien et turpis elementum, ultricies semper metus tincidunt. Duis malesuada tincidunt dolor, sed aliquam urna molestie nec. Maecenas rhoncus nisi et dolor commodo dictum. Vestibulum id tellus ornare, molestie erat id, cursus mi. Quisque nec enim erat. Nullam in pretium lectus, sed lobortis sem. Aenean dapibus enim id vulputate vehicula.\n";


let delay = 0;
for (const char of sentence) {
    setTimeout(() => {
        process.stdout.write(char);
    }, delay);
    delay += 50;
}