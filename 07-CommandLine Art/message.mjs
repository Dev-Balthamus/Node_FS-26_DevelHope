import figlet from "figlet";

console.log(
    figlet.textSync("Blood! Tears! Dust...", {
      font: "Gothic",
      horizontalLayout: "full",
      verticalLayout: "full",
      width: 60,
      whitespaceBreak: true,
    })
  );