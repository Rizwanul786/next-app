// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'

const data=[
    {"name":"New Electric Scooter Black Color",
    "description":
    "GT Force Electric scooter is a brain child of two great minds, who bring along with themselves extensive knowledge with decades of technical and industry expertise to integrate into one challenging force.\n GT Force has been established with the goal of revolutionizing the electric scooter market in India. The organization aims to expose the Indian EV consumer to the unparalleled benefits and absolute pleasure of riding a real e-Scooter in comparison to the fuel-based vehicle. \n The company has started its operations with manufacturing units in Manesar, Gurgaon, and has a manufacturing capacity of 5000 units per month.",
    "feature":"Mobile Charger, Height Adjustable Seat, Telescopic Front Suspension System"
    },
    {"name":"New Electric Scooter White Color",
        "description":
        "GT Force Electric scooter is a brain child of two great minds, who bring along with themselves extensive knowledge with decades of technical and industry expertise to integrate into one challenging force.\n GT Force has been established with the goal of revolutionizing the electric scooter market in India. The organization aims to expose the Indian EV consumer to the unparalleled benefits and absolute pleasure of riding a real e-Scooter in comparison to the fuel-based vehicle. \n The company has started its operations with manufacturing units in Manesar, Gurgaon, and has a manufacturing capacity of 5000 units per month.",
        "feature":"Mobile Charger, Height Adjustable Seat, Telescopic Front Suspension System"
    },
    {"name":"New Electric Scooter Red Color",
        "description":
        "GT Force Electric scooter is a brain child of two great minds, who bring along with themselves extensive knowledge with decades of technical and industry expertise to integrate into one challenging force.\n GT Force has been established with the goal of revolutionizing the electric scooter market in India. The organization aims to expose the Indian EV consumer to the unparalleled benefits and absolute pleasure of riding a real e-Scooter in comparison to the fuel-based vehicle. \n The company has started its operations with manufacturing units in Manesar, Gurgaon, and has a manufacturing capacity of 5000 units per month.",
        "feature":"Mobile Charger, Height Adjustable Seat, Telescopic Front Suspension System"
    }
];
export default function handler(req, res) {
    res.status(200).json({ data:data })
  }  