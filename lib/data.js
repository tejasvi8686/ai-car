import { Car, Shield, Clock, Users, BadgeCheck, Zap } from "lucide-react";
export const featuredCars = [
    {
      id: 1,
      make: "Toyota",
      model: "Camry",
      year: 2023,
      price: 28999,
      images: ["/1.png"],
      transmission: "Automatic",
      fuelType: "Gasoline",
      bodyType: "Sedan",
      mileage: 15000,
      color: "White",
      wishlisted: false,
    },
    {
      id: 2,
      make: "Honda",
      model: "Civic",
      year: 2023,
      price: 26499,
      images: ["/2.webp"],
      transmission: "Manual",
      fuelType: "Gasoline",
      bodyType: "Sedan",
      mileage: 12000,
      color: "Blue",
      wishlisted: true,
    },
    {
      id: 3,
      make: "Tesla",
      model: "Model 3",
      year: 2022,
      price: 42999,
      images: ["/3.jpg"],
      transmission: "Automatic",
      fuelType: "Electric",
      bodyType: "Sedan",
      mileage: 8000,
      color: "Red",
      wishlisted: false,
    },
  ];

  export const features = [
    {
      icon: Car,
      title: "Extensive Selection",
      description: "Access thousands of verified vehicles from trusted dealerships and private sellers nationwide.",
      stats: "10,000+ Cars",
      color: "blue"
    },
    {
      icon: Clock,
      title: "Quick Process",
      description: "Book a test drive online in minutes with our streamlined scheduling system.",
      stats: "5-min Booking",
      color: "green"
    },
    {
      icon: Shield,
      title: "Secure & Verified",
      description: "Every listing is thoroughly verified with comprehensive vehicle history reports.",
      stats: "100% Verified",
      color: "purple"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Get personalized assistance from our team of automotive experts.",
      stats: "24/7 Support",
      color: "orange"
    },
    {
      icon: BadgeCheck,
      title: "Quality Assured",
      description: "All vehicles undergo rigorous quality checks and inspections.",
      stats: "150+ Checks",
      color: "red"
    },
    {
      icon: Zap,
      title: "AI-Powered Search",
      description: "Find your perfect match with our intelligent recommendation system.",
      stats: "Smart Match",
      color: "indigo"
    }
  ];
  
  
  export const carMakes = [
    { id: 1, name: "Hyundai", image: "/make/hyundai.webp" },
    { id: 2, name: "Honda", image: "/make/honda.webp" },
    { id: 3, name: "BMW", image: "/make/bmw.webp" },
    { id: 4, name: "Tata", image: "/make/tata.webp" },
    { id: 5, name: "Mahindra", image: "/make/mahindra.webp" },
    { id: 6, name: "Ford", image: "/make/ford.webp" },
  ];
  
  export const bodyTypes = [
    {
      name: "SUV",
      description: "Perfect for family adventures",
      count: 234,
      imageUrl: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2940&auto=format&fit=crop"
    },
    {
      name: "Sedan",
      description: "Classic comfort and style",
      count: 186,
      imageUrl: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=2940&auto=format&fit=crop"
    },
    {
      name: "Convertible",
      description: "Open-air driving experience",
      count: 45,
      imageUrl: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?q=80&w=2940&auto=format&fit=crop"
    },
    {
      name: "Hatchback",
      description: "Compact and versatile",
      count: 128,
      imageUrl: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2940&auto=format&fit=crop"
    }
  ];
  
  export const faqItems = [
    {
      question: "How does the test drive booking work?",
      answer:
        "Simply find a car you're interested in, click the 'Test Drive' button, and select an available time slot. Our system will confirm your booking and provide all necessary details.",
    },
    {
      question: "Can I search for cars using an image?",
      answer:
        "Yes! Our AI-powered image search lets you upload a photo of a car you like, and we'll find similar models in our inventory.",
    },
    {
      question: "Are all cars certified and verified?",
      answer:
        "All cars listed on our platform undergo a verification process. We are a trusted dealerships and verified private seller.",
    },
    {
      question: "What happens after I book a test drive?",
      answer:
        "After booking, you'll receive a confirmation email with all the details. We will also contact you to confirm and provide any additional information.",
    },
  ];