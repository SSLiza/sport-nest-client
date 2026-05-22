'use client'
import { useSession } from '@/lib/auth-client';
import { Button, FieldError, Input, Label, TextArea, TextField } from '@heroui/react';
import React from 'react';
import { toast } from 'react-toastify';

const AddFacilityPage = () => {
    const { data: session } = useSession();
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const formEntries = Object.fromEntries(formData.entries());

        const facilities = {
            ...formEntries,
            price_per_hour: Number(formEntries.price_per_hour),
            capacity: Number(formEntries.capacity),
            booking_count: Number(formEntries.booking_count || 0),
            owner_email: session?.user?.email,
            createdAt: new Date().toISOString(),
        };

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(facilities),
                }
            );

            const data = await res.json();

            if (res.ok) {
                toast.success("Facility added successfully!");
                e.target.reset();
            } else {
                toast.error(data?.message || "Failed to add facility!");
            }
        } catch (error) {
            toast.error("Something went wrong!");
            console.error(error);
        }
    };
    return (
        <div className='max-w-3xl mx-auto px-4'>
            <h1 className="text-3xl font-bold text-center mb-8">Add New Facility</h1>
            <form className="py-10 px-4 md:px-10 space-y-8 w-full" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Facility Name */}
                    <div className="md:col-span-2">
                        <TextField name="name" isRequired>
                            <Label>Facility Name</Label>
                            <Input
                                placeholder="Olympic Football Stadium"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Facility Type */}
                    <div>
                        <div>
                            <label className="block mb-2 font-medium">
                                Facility Type
                            </label>

                            <select
                                name="facility_type"
                                required
                                className="w-full border rounded-2xl px-4 py-3"
                            >
                                <option value="">Select Facility Type</option>
                                <option value="Football">Football</option>
                                <option value="Cricket">Cricket</option>
                                <option value="Basketball">Basketball</option>
                                <option value="Badminton">Badminton</option>
                                <option value="Swimming">Swimming</option>
                                <option value="Gym">Gym</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                    </div>
                    {/* Image URL */}
                    <div className="md:col-span-2">
                        <TextField name="imageUrl" type="url" isRequired>
                            <Label>Image URL</Label>
                            <Input
                                type="url"
                                placeholder="https://example.com/stadium.jpg"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Location */}
                    <TextField name="location" isRequired>
                        <Label>Location</Label>
                        <Input
                            placeholder="Sylhet, Bangladesh"
                            className="rounded-2xl"
                        />
                        <FieldError />
                    </TextField>

                    {/* Price Per Hour */}
                    <TextField name="price_per_hour" type="number" isRequired>
                        <Label>Price Per Hour ($)</Label>
                        <Input
                            type="number"
                            min="0"
                            placeholder="50"
                            className="rounded-2xl"
                        />
                        <FieldError />
                    </TextField>

                    {/* Capacity */}
                    <TextField name="capacity" type="number" isRequired>
                        <Label>Capacity</Label>
                        <Input
                            type="number"
                            min="0"
                            placeholder="22"
                            className="rounded-2xl"
                        />
                        <FieldError />
                    </TextField>

                    {/* Available Slots */}
                    <div className="md:col-span-2">
                        <TextField name="available_slots" isRequired>
                            <Label>Available Slots</Label>
                            <Input
                                placeholder="8AM-10AM, 3PM-5PM"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Owner Email */}
                    <div className="md:col-span-2">
                        <TextField name="owner_email" type="email" isRequired>
                            <Label>Owner Email</Label>
                            <Input
                                type="email"
                                value={session?.user?.email || ""}
                                isReadOnly
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Booking Count */}
                    <TextField name="booking_count" type="number">
                        <Label>Booking Count</Label>
                        <Input
                            type="number"
                            min="0"
                            placeholder="0"
                            className="rounded-2xl"
                        />
                        <FieldError />
                    </TextField>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <TextField name="description" isRequired>
                            <Label>Description</Label>
                            <TextArea
                                placeholder="Describe the facility..."
                                className="rounded-3xl"
                            />
                            <FieldError />
                        </TextField>
                    </div>
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    variant="outline"
                    className="rounded-none w-full bg-[#03497F] text-white"
                >
                    Add Facility
                </Button>
            </form>
        </div>
    );
};

export default AddFacilityPage;