import { create } from "zustand";

const useProdcutsStore = create((set) => ({
  categories: [
    {
      id: 1,
      title: "compact",
    },
    {
      id: 2,
      title: "dslr",
    },
    {
      id: 3,
      title: "flim",
    },
    {
      id: 4,
      title: "mirrorless",
    },
    {
      id: 5,
      title: "professional",
    },
  ],
  products: [
    {
      _id: {
        $oid: "654c773c492da6a22b714bb7",
      },
      image:
        "https://res.cloudinary.com/de0shfirh/image/upload/f_auto,q_auto/v1/photo-land/compact/yqynubthpkglxfw7gyzo",
      category: "compact",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      price: "1000",
      title:
        "Sony Cyber-shot DSC-RX10 IV Photo Camera Compact 20.1MP Wi-Fi Bluetooth Black",
      isNew: false,
    },
    {
      _id: {
        $oid: "654c7ded22e6a09966d9f52e",
      },
      image:
        "https://res.cloudinary.com/de0shfirh/image/upload/f_auto,q_auto/v1/photo-land/compact/ujtcd5ts5pgvjxl6qxmm",
      category: "compact",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      price: "1000",
      title: "Nikon Coolpix P1000 Photo Camera Bridge 16MP Black",
      isNew: false,
    },
    {
      _id: {
        $oid: "654c80f822e6a09966d9f530",
      },
      image:
        "https://res.cloudinary.com/de0shfirh/image/upload/f_auto,q_auto/v1/photo-land/compact/qmpxn74no594k0mzjlg7",
      category: "compact",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      price: "1000",
      title:
        "Sony Cyber-Shot DSC-RX100 VA - Photo Camera, 20,1 MP, Zoom Optic, 2.9x, ZEISS Vario-Sonnar",
      isNew: true,
    },
    {
      _id: {
        $oid: "654c838522e6a09966d9f531",
      },
      image:
        "https://res.cloudinary.com/de0shfirh/image/upload/f_auto,q_auto/v1/photo-land/compact/jthlvrv0fw6uriiwy8ha",
      category: "compact",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      price: "1000",
      title: "Olympus TG-6 Photo Camera Compact Subacvatic 12MP 4K Black",
      isNew: false,
    },
    {
      _id: {
        $oid: "654c83bb22e6a09966d9f532",
      },
      image:
        "https://res.cloudinary.com/de0shfirh/image/upload/f_auto,q_auto/v1/photo-land/compact/vwjckpwdhlmzytxkc4fd",
      category: "compact",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      price: "1000",
      title:
        "Panasonic Lumix FZ1000 II Photo Camera Bridge 20.1 MP Zoom 16x 4K Bla",
      isNew: true,
    },
    {
      _id: {
        $oid: "654c840822e6a09966d9f533",
      },
      image:
        "https://res.cloudinary.com/de0shfirh/image/upload/f_auto,q_auto/v1/photo-land/dslr/pzsurceenycpeo9jaab8",
      category: "dslr",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      price: "1000",
      title: "Canon EOS 6D Mark II Camera DSLR 26.2MP CMOS Body",
      isNew: false,
    },
    {
      _id: {
        $oid: "654c843c22e6a09966d9f534",
      },
      image:
        "https://res.cloudinary.com/de0shfirh/image/upload/f_auto,q_auto/v1/photo-land/dslr/pmixdque3x1gpwug9s98",
      category: "dslr",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      price: "1000",
      title: "Nikon D7500 Camera DSLR 20.9MP CMOS 4K Kit 18-140 mm",
      isNew: true,
    },
    {
      _id: {
        $oid: "654c847122e6a09966d9f535",
      },
      image:
        "https://res.cloudinary.com/de0shfirh/image/upload/f_auto,q_auto/v1/photo-land/dslr/fktgn3g7gch8orfrg7vx",
      category: "dslr",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      price: "1000",
      title:
        "Canon EOS 2000D Camera DSLR 24.1MP CMOS Kit with Camera Lens EF-S 18-55mm f/3.5-5.6 III Black",
      isNew: false,
    },
    {
      _id: {
        $oid: "654c84a522e6a09966d9f536",
      },
      image:
        "https://res.cloudinary.com/de0shfirh/image/upload/f_auto,q_auto/v1/photo-land/dslr/h6vvxwvv60jlask2doao",
      category: "dslr",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      price: "1000",
      title: "Canon EOS 250D Kit with Camera Lens EF-S 18-55mm DC Black",
      isNew: false,
    },
    {
      _id: {
        $oid: "654c84d022e6a09966d9f537",
      },
      image:
        "https://res.cloudinary.com/de0shfirh/image/upload/f_auto,q_auto/v1/photo-land/dslr/pudz1fq8r3nlhhlorzni",
      category: "dslr",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      price: "1000",
      title: "Nikon D850 Camera DSLR 45.7MP CMOS Body",
      isNew: true,
    },
    {
      _id: {
        $oid: "654c850922e6a09966d9f538",
      },
      image:
        "https://res.cloudinary.com/de0shfirh/image/upload/f_auto,q_auto/v1/photo-land/film/doxagthspxn8pox2dwsj",
      category: "flim",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      price: "1000",
      title: "Fujifilm Instax Mini 90 Neo Classic Photo Camera Instant Black",
      isNew: false,
    },
    {
      _id: {
        $oid: "654c854322e6a09966d9f539",
      },
      image:
        "https://res.cloudinary.com/de0shfirh/image/upload/f_auto,q_auto/v1/photo-land/film/vfixevoqgcihphiuocu3",
      category: "flim",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      price: "1000",
      title: "Fujifilm Instax Wide 300 Photo Camera Instant",
      isNew: false,
    },
    {
      _id: {
        $oid: "654c903022e6a09966d9f53a",
      },
      image:
        "https://res.cloudinary.com/de0shfirh/image/upload/f_auto,q_auto/v1/photo-land/film/ufzjym3thyfkks87cy70",
      category: "flim",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      price: "1000",
      title: "Fujifilm Instax Mini Evo Hybrid Photo Camera Instant",
      isNew: false,
    },
    {
      _id: {
        $oid: "654c905822e6a09966d9f53b",
      },
      image:
        "https://res.cloudinary.com/de0shfirh/image/upload/f_auto,q_auto/v1/photo-land/film/h3o5ayzuamtqb6xivh4d",
      category: "flim",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      price: "1000",
      title: "Fujifilm Instax Mini 40 Photo Camera Instant Black",
      isNew: true,
    },
    {
      _id: {
        $oid: "654c907d22e6a09966d9f53c",
      },
      image:
        "https://res.cloudinary.com/de0shfirh/image/upload/f_auto,q_auto/v1/photo-land/film/iw95myrzvee55v68qo1u",
      category: "flim",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      price: "1000",
      title: "Agfaphoto Photo Camera Analog 35mm Reusable Black",
      isNew: "false",
    },
    {
      _id: {
        $oid: "654c90c022e6a09966d9f53d",
      },
      image:
        "https://res.cloudinary.com/de0shfirh/image/upload/f_auto,q_auto/v1/photo-land/mirrorless/it7mow02umfkxgjcarlm",
      category: "mirrorless",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      price: "1000",
      title: "Panasonic LUMIX S5 II Photo Camera Mirrorless Full Frame 24.2MP",
      isNew: false,
    },
    {
      _id: {
        $oid: "654c910322e6a09966d9f53e",
      },
      image:
        "https://res.cloudinary.com/de0shfirh/image/upload/f_auto,q_auto/v1/photo-land/mirrorless/todz4zqo2mumqon1umhm",
      category: "mirrorless",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      price: "1000",
      title:
        "Canon EOS R6 Mark II Photo Camera Mirrorless Full Frame 24.2MP Body Black",
      isNew: true,
    },
    {
      _id: {
        $oid: "654c912222e6a09966d9f53f",
      },
      image:
        "https://res.cloudinary.com/de0shfirh/image/upload/f_auto,q_auto/v1/photo-land/mirrorless/w8pdq8iu482pyehsqeo4",
      category: "mirrorless",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      price: "1000",
      title:
        "Canon EOS M50 II Photo Camera Mirrorless 24MP Kit with Camera Lens EF-M 15-45mm F/3.5-6.3 IS STM Black",
      isNew: false,
    },
    {
      _id: {
        $oid: "654c914222e6a09966d9f540",
      },
      image:
        "https://res.cloudinary.com/de0shfirh/image/upload/f_auto,q_auto/v1/photo-land/mirrorless/fyzgoujt68arhtlgwgl8",
      category: "mirrorless",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      price: "1000",
      title: "Sony A7 III Body Photo Camera Mirrorless 24MP Full Frame 4K",
      isNew: true,
    },
    {
      _id: {
        $oid: "654c916522e6a09966d9f541",
      },
      image:
        "https://res.cloudinary.com/de0shfirh/image/upload/f_auto,q_auto/v1/photo-land/professional/nr27qppgaxvnbtorpwnn",
      category: "professional",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae ante purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      price: "1000",
      title: "Sigma FP Digital Camera Full Frame 24.6MP Body",
      isNew: true,
    },
  ],
}));

export default useProdcutsStore;
