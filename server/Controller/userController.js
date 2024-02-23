import asyncHandler from 'express-async-handler'
import { prisma } from '../conifg/prismaConfig.js'
import { response } from 'express';

 export const creatUser=asyncHandler(async(req,res)=>
{
    console.log('creating a User')
    
    let{userEmail}  = req.body;
    console.log(userEmail);

    const userExists = await prisma.user.findUnique({where: {userEmail: userEmail} });

    if(!userExists)
    {
        const user=await prisma.user.create({data:req.body});
        res.send({
            message: "User registered successfully",
            user:user,
        });
    }
    else res.status(201).send({message:"User already registered"});
});

export const bookVisit=asyncHandler(async(req,res)=>
{
    const{userEmail,date} = req.body;
    const {id}=req.params;

    try{

        const alreadyBooked = await prisma.user.findUnique  ({
            where:{userEmail},
            select:{bookedPropertyVisits:true}
        })

        if(alreadyBooked.bookedPropertyVisits.some((visit) => visit.id === id))  {
            res.status(400).json({message:"This property is already booked by you"})
         }

         else{
            await prisma.user.update({
                where:{userEmail},
                data : {
                    bookedPropertyVisits: {push: {id,date}}
                }
            })
         }
         res.send("Your visit is booked successfully")

    }
    catch(err){
        throw new Error(err.message);
    }
});

export const getallBookings= asyncHandler(async(req, res)=>{
    const {userEmail}=req.body;
    try{
        const Bookings=await prisma.user.findUnique({
            where:{userEmail},
            select:{bookedPropertyVisits:true},
        });
        res.status(200).send(Bookings);
    }
    catch(err)
    {
        throw new Error(err.message);
    }
});


export const cancelBookings= asyncHandler(async(req,res)=>{
   const{userEmail}=req.body;
   const {id}=req.params;
   try{
    const user=await prisma.user.findUnique({
        where:{userEmail},
        select:{bookedPropertyVisits:true},
    });
    const index=user.bookedPropertyVisits.findIndex((visit)=> visit.id===id);
    if(index==-1)
    {
        res.status(404).json({message:"Booking not found!"});
    }
    else
    {
      user.bookedPropertyVisits.splice(index,1);
      await prisma.user.update({
        where:{userEmail},
        data:
        {
            bookedPropertyVisits:user.bookedPropertyVisits,
        },
      });
      res.send("Booking is cancelled successfully");
    }
}
catch(err)
{
    throw new Error(err.message);
}

});

export const toFavorites =asyncHandler(async(req,res)=>{
    const {userEmail}=req.body;
    const {rid}=req.params;

    try{
        const user = await prisma.user.findUnique({

            where: {userEmail},
        });
        if (user.favPropertyID.includes(rid)) {
            const updateUser = await prisma.user.update({
              where: { userEmail },
              data: {
                favPropertyID: {
                  set: user.favPropertyID.filter((id) => id !== rid),
                },
              },
            });
      
            res.send({ message: "Removed from favorites", user: updateUser });
          } else {
            const updateUser = await prisma.user.update({
              where: { userEmail },
              data: {
                favPropertyID: {
                  push: rid,
                },
              },
            });
            res.send({ message: "Updated favorites", user: updateUser });
          }
        } catch (err) {
          throw new Error(err.message);
        }
    });
export const allFavorite=asyncHandler(async(req,res)=>{
    const{userEmail}=req.body;

    try{
        const favProperty=await prisma.user.findUnique({
            where: { userEmail },
            select:{favPropertyID:true},
        });
        res.status(200).send(favProperty);
    }
    catch(err)
    {
        throw new Error(err.message);
    }
});