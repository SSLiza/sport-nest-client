'use client'
import { Button, FieldError, Input, Label, ListBox, TextArea, TextField, Select } from '@heroui/react';
import React from 'react';

const AddFacilityPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        const formData = new FormData(e.target);
        const destination = Object.fromEntries(formData.entries());
        console.log("Form Data:", destination);

        const res = await fetch('http://localhost:5000/facilities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(destination),

        })
        const data = await res.json();
        console.log("Response from server:", data);
    }
    return (
        <div className='mx-auto'>
            <h1 className="text-3xl font-bold text-center mb-8">Add New Facility</h1>
            <form className="p-10 space-y-8 w-3xl" onSubmit={onSubmit}>
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
                        <Select
                            name="facility_type"
                            isRequired
                            className="w-full"
                            placeholder="Select facility type"
                        >
                            <Label>Facility Type</Label>

                            <Select.Trigger className="rounded-2xl">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>

                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="Football" textValue="Football">
                                        Football
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>

                                    <ListBox.Item id="Cricket" textValue="Cricket">
                                        Cricket
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>

                                    <ListBox.Item id="Basketball" textValue="Basketball">
                                        Basketball
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>

                                    <ListBox.Item id="Badminton" textValue="Badminton">
                                        Badminton
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>

                                    <ListBox.Item id="Swimming" textValue="Swimming">
                                        Swimming
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>

                                    <ListBox.Item id="Gym" textValue="Gym">
                                        Gym
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
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
                                placeholder="owner@example.com"
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
                    // isLoading={isPending}
                    className="rounded-none w-full bg-cyan-500 text-white"
                >
                    {/* {isPending ? "Adding Facility..." : "Add Facility"} */}
                    Add Facility
                </Button>
            </form>
        </div>
    );
};

export default AddFacilityPage;