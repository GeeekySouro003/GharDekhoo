import asynchandler from "express-async-handler";
import {prisma} from  '../conifg/prismaConfig.js';
export const createResidency= asynchandler(async (req,res)=>{
    const {title,description,price,address,city,country,image,amenities,ownerEmail  }= req.body.data;

console.log(req.body.data);
try {
    const residency = await prisma.property.create({
        data: {
            title,
            description,
            price,
            address,
            city,
            country,
            image,
            amenities,
            owner: {connect : {userEmail:ownerEmail}},
        },
    });
    res.send({message:"Property registered successfully",residency});
}
catch(err)
{
    if(err.code === "P2002")
    {
            throw new Error("A property with this address already exists");
    }
    throw new Error(err.message);
}
});

export const getAllProperties = asynchandler(async(req, res)=>{
  const properties=await prisma.property.findMany({orderBy:{
    createdAt:"desc",
  },
});
res.send(properties);
});

export const getResidency = asynchandler(async (req, res) => {
    const { id } = req.params;
  
    try {
      const residency = await prisma.property.findUnique({
        where: { id },
      });
      res.send(residency);
    } catch (err) {
      throw new Error(err.message);
    }
  });