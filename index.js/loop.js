
const user1 = {
    nama: "Akari Nara",
    asal: "Tokyo",
    pekerjaan: "Programmer Analyst",
    umur: 19,
    gender: "perempuan"
  };
  
  const user2 = {
    nama: "Haruto Genri",
    asal: "Osaka",
    pekerjaan: "Data Engineer",
    umurr: 20,
    gender: "laki-laki"
  };
  
  const user3 = {
    nama: "Mako Kazuki",
    asal: "Hiroshima",
    pekerjaan: "Software Engineer",
    umur: 23,
    gender: "laki-laki"
  };
  
  const user4 = {
    nama: "Okita Aozora",
    asal: "Kyoto",
    pekerjaan: "UI/UX Designer",
    umur: 18,
    gender: "laki-laki"
  };
  
  const user5 = {
    nama: "Emi Bashira",
    asal: "Kobe",
    pekerjaan: "Programmer",
    umur: 21,
    gender: "perempuan"
  };
  

  const userArray = [user1, user2, user3, user4, user5];
  
  console.log("Panggil setiap objek dengan menggunakan for in:");
  for (let i = 0; i < userArray.length; i++) {
    console.log(`user ${i + 1}:`);
    for (let key in userArray[i]) {
      console.log(`${key}: ${userArray[i][key]}`);
    }
    console.log("\n");
  }
  
  console.log("Panggil array dengan menggunakan for of:");
  for (let user of userArray) {
    console.log(user);
  }
  
  
  
 