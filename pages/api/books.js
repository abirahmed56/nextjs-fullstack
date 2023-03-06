// import fs from "fs";
// import path from "path";

// function getData() {
//   const filePath = path.join(process.cwd(), "data", "books.json");
//   const fileData = fs.readFileSync(filePath);
//   const data = JSON.parse(fileData);

//   return data;
// }

import 
function handler(req, res) {
  if (req.method === "GET") {
    // const data = getData();
    return res.status(200).json({ message: data });
  } else if (req.method == "POST") {
    const { name, description, imgurl } = req.body;

    const newBook = { name, description, imgurl };
    // const filePath = path.join(process.cwd(), "data", "books.json");
    // const data = getData();
    // data.push(newBook);
    // fs.writeFileSync(filePath, JSON.stringify(data));
    // return res.status(200).json({ message: "Added", book: newBook });
  }
  
}

export default handler;
