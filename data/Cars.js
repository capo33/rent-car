// insert dommy data
const carsData = [
  {
    name: "Toyota",
    image:
      "https://moottori.fi/wp-content/uploads/2023/02/Toyota-RAV-4-2023-EK-5.jpg",
    capacity: "4",
    feulType: "Petrol",
    model: "2021",
    gearType: "Automatic",
    bookedTimeSlots: [
      {
        from: "2021-06-01T10:00:00.000+00:00",
        to: "2021-06-01T11:00:00.000+00:00",
      },
      {
        from: "2021-06-01T12:00:00.000+00:00",
        to: "2021-06-01T13:00:00.000+00:00",
      },
    ],
    rentPerHour: "90",
  },
  {
    name: "Honda",
    image:
      "https://www.motortrend.com/uploads/sites/10/2022/11/2023-honda-civic-sport-5door-hatchback-angular-front.png",
    capacity: "4",
    feulType: "Petrol",
    model: "2021",
    gearType: "Automatic",
    bookedTimeSlots: [
      {
        from: "2021-06-01T10:00:00.000+00:00",
        to: "2021-06-01T11:00:00.000+00:00",
      },
      {
        from: "2021-06-01T12:00:00.000+00:00",
        to: "2021-06-01T13:00:00.000+00:00",
      },
    ],
    rentPerHour: "70",
  },
  {
    name: "Nissan",
    image:
      "https://moottori.fi/wp-content/uploads/2022/10/Nissan-Ariya-2022-kotimaa-EK-2-750x422.jpg",
    capacity: "4",
    feulType: "Petrol",
    model: "2022",
    gearType: "Manual",
    bookedTimeSlots: [
      {
        from: "2021-06-01T10:00:00.000+00:00",
        to: "2021-06-01T11:00:00.000+00:00",
      },
      {
        from: "2021-06-01T12:00:00.000+00:00",
        to: "2021-06-01T13:00:00.000+00:00",
      },
    ],
    rentPerHour: "120",
  },
  {
    name: "Mazda",
    image:
      "https://moottori.fi/wp-content/uploads/2023/04/mazda3_exterior_gray_l.jpg",
    capacity: "4",
    feulType: "Petrol",
    model: "2022",
    gearType: "Automatic",
    bookedTimeSlots: [
      {
        from: "2021-06-01T10:00:00.000+00:00",
        to: "2021-06-01T11:00:00.000+00:00",
      },
      {
        from: "2021-06-01T12:00:00.000+00:00",
        to: "2021-06-01T13:00:00.000+00:00",
      },
    ],
    rentPerHour: "100",
  },
  {
    name: "Mitsubishi",
    image:
      "https://moottori.fi/wp-content/uploads/2021/07/Mitsubishi-Eclipse-Cross-PHEV-2021-MA-14.jpg",
    capacity: "5",
    feulType: "Petrol",
    model: "2021",
    gearType: "Automatic",
    bookedTimeSlots: [
      {
        from: "2021-06-01T10:00:00.000+00:00",
        to: "2021-06-01T11:00:00.000+00:00",
      },
      {
        from: "2021-06-01T12:00:00.000+00:00",
        to: "2021-06-01T13:00:00.000+00:00",
      },
    ],
    rentPerHour: "80",
  },

  {
    name: "BMW",
    image:
      "https://media.autokeskus.fi/pub/public/images/hero/BMW/BMW-i4-Gran-Coupe-1680.jpg?c=system_x1080",
    capacity: "4",
    feulType: "Petrol",
    model: "2022",
    gearType: "Automatic",
    bookedTimeSlots: [
      {
        from: "2021-06-01T10:00:00.000+00:00",
        to: "2021-06-01T11:00:00.000+00:00",
      },
      {
        from: "2021-06-01T12:00:00.000+00:00",
        to: "2021-06-01T13:00:00.000+00:00",
      },
    ],
    rentPerHour: "120",
  },
  {
    name: "Mercedes Benz",
    image:
      "https://dsu2f16ugr2z8.cloudfront.net/1600x1200/autotalliprodmedia/images/netweels/Mercedes-Benz/S/2021/Mercedes-Benz_142_12_20201028163038.jpg",
    capacity: "4",
    feulType: "Petrol",
    model: "2021",
    gearType: "Automatic",
    bookedTimeSlots: [
      {
        from: "2021-06-01T10:00:00.000+00:00",
        to: "2021-06-01T11:00:00.000+00:00",
      },
      {
        from: "2021-06-01T12:00:00.000+00:00",
        to: "2021-06-01T13:00:00.000+00:00",
      },
    ],
    rentPerHour: "120",
  },
  {
    name: "Audi",
    image:
      "https://assets.apu.fi/vqd9tl2q3uk2/7kgqdXwPI7ykZLhf23iy96/f40edcb4142790403e83f0b7a1d37b28/Audi_e-tron_GT_-konseptiauto_PDJii.jpg?w=2048&q=75&fit=crop-center",
    capacity: "4",
    feulType: "Petrol",
    model: "2022",
    gearType: "Manual",
    bookedTimeSlots: [
      {
        from: "2021-06-01T10:00:00.000+00:00",
        to: "2021-06-01T11:00:00.000+00:00",
      },
      {
        from: "2021-06-01T12:00:00.000+00:00",
        to: "2021-06-01T13:00:00.000+00:00",
      },
    ],
    rentPerHour: "110",
  },
  {
    name: "Volkswagen",
    image:
      "https://moottori.fi/wp-content/uploads/2019/11/Volvo_XC40_T5_Twin_Engine_2019_EK_3-640x360.jpg",
    capacity: "4",
    feulType: "Petrol",
    model: "2022",
    gearType: "Automatic",
    bookedTimeSlots: [
      {
        from: "2021-06-01T10:00:00.000+00:00",
        to: "2021-06-01T11:00:00.000+00:00",
      },
      {
        from: "2021-06-01T12:00:00.000+00:00",
        to: "2021-06-01T13:00:00.000+00:00",
      },
    ],
    rentPerHour: "130",
  },
];

export default carsData;
