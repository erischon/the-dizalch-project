import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

import dbConnect from "@/lib/dbConnect";
import Experience from "@/models/portfolio/experience";

/**
 * @description Get all experiences
 * @version 1.0.0
 * @method GET
 * @url /api/portfolio/experience
 */
export async function GET() {
  dbConnect();

  try {
    const experiences = await Experience.find({});

    return NextResponse.json(experiences);
  } catch (error) {
    console.log("Get ", error);

    return NextResponse.json(
      { error: "Experiences are not retrieved." },
      { status: 500 }
    );
  }
}

/**
 * @description Create a new experience
 * @version 1.0.0
 * @method POST
 * @url /api/portfolio/experience
 */
export async function POST(request: NextRequest) {
  dbConnect();

  // Retrieve the data from the request body at JSON format
  const data = await request.json();
  const { company, xpType, startDate, endDate, isActive } = data;

  // Check if the required fields are present
  if (!company || !xpType || !startDate) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 422 }
    );
  }

  // Create a new experience
  try {
    await Experience.create(data);

    return NextResponse.json(
      { message: "Experience created." },
      { status: 201 }
    );
  } catch (error) {
    console.log("Experience is not created.", error);

    return NextResponse.json(
      { error: "Experience is not created." },
      { status: 500 }
    );
  }
}
