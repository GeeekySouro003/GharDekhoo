import express from 'express';
import { allFavorite, bookVisit, cancelBookings, creatUser, getallBookings, toFavorites } from '../Controller/userController.js';

const router=express.Router();
router.post('/register',creatUser);
router.post('/bookVisit/:id',bookVisit);
router.post("/allBookings",getallBookings);
router.post("/removeBookings/:id",cancelBookings);
router.post("/toFavorite/:rid",toFavorites);
router.post("/allFavorite",allFavorite);

export{router as userRoute}