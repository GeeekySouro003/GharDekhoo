import express from 'express';
import { createResidency } from '../Controller/resController.js';
import { getAllProperties } from '../Controller/resController.js';
import { getResidency } from '../Controller/resController.js';
const router=express.Router();
router.post('/create',createResidency);
router.get('/allresidency',getAllProperties);
router.get("/:id", getResidency)
export{router as residencyRoute}