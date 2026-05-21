"use client";

import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";

import { BiEdit } from "react-icons/bi";

export function EditModal({ facility }) {
  const {
    _id,
    name,
    facility_type,
    imageUrl,
    location,
    price_per_hour,
    capacity,
    available_slots,
    description,
  } = facility;

  // Convert slots safely
  const slots = Array.isArray(available_slots)
    ? available_slots.join(", ")
    : available_slots || "";

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const updatedFacility = Object.fromEntries(
      formData.entries()
    );

    // Convert slots string to array
    updatedFacility.available_slots =
      updatedFacility.available_slots
        .split(",")
        .map((slot) => slot.trim());

    const res = await fetch(
      `{}/facilities/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedFacility),
        credentials: "include",
      }
    );

    const data = await res.json();

    console.log(data);
  };

  return (
    <Modal>

      {/* Button */}
      <Button
        variant="outline"
        className={"rounded-none"}
      >
        <BiEdit /> Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">

          <Modal.Dialog className="sm:max-w-xl">

            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>
                Edit Facility
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">

              <Surface variant="default">

                <form
                  onSubmit={onSubmit}
                  className="p-10 space-y-8"
                >

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Facility Name */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={name}
                        name="name"
                        isRequired
                      >
                        <Label>Facility Name</Label>

                        <Input
                          placeholder="Elite Football Arena"
                          className="rounded-2xl"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Facility Type */}
                    <TextField
                      defaultValue={facility_type}
                      name="facility_type"
                      isRequired
                    >
                      <Label>Facility Type</Label>

                      <Input
                        placeholder="Football"
                        className="rounded-2xl"
                      />

                      <FieldError />
                    </TextField>

                    {/* Location */}
                    <TextField
                      defaultValue={location}
                      name="location"
                      isRequired
                    >
                      <Label>Location</Label>

                      <Input
                        placeholder="Sylhet, Bangladesh"
                        className="rounded-2xl"
                      />

                      <FieldError />
                    </TextField>

                    {/* Price */}
                    <TextField
                      defaultValue={price_per_hour}
                      name="price_per_hour"
                      type="number"
                      isRequired
                    >
                      <Label>
                        Price Per Hour
                      </Label>

                      <Input
                        type="number"
                        placeholder="50"
                        className="rounded-2xl"
                      />

                      <FieldError />
                    </TextField>

                    {/* Capacity */}
                    <TextField
                      defaultValue={capacity}
                      name="capacity"
                      type="number"
                      isRequired
                    >
                      <Label>Capacity</Label>

                      <Input
                        type="number"
                        placeholder="20"
                        className="rounded-2xl"
                      />

                      <FieldError />
                    </TextField>

                    {/* Available Slots */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={slots}
                        name="available_slots"
                        isRequired
                      >
                        <Label>
                          Available Slots
                        </Label>

                        <Input
                          placeholder="8AM-10AM, 2PM-4PM"
                          className="rounded-2xl"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Image URL */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={imageUrl}
                        name="imageUrl"
                        isRequired
                      >
                        <Label>Image URL</Label>

                        <Input
                          type="url"
                          placeholder="https://example.com/image.jpg"
                          className="rounded-2xl"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={description}
                        name="description"
                        isRequired
                      >
                        <Label>Description</Label>

                        <TextArea
                          placeholder="Describe the facility..."
                          className="rounded-3xl"
                        />

                        <FieldError />
                      </TextField>
                    </div>

                  </div>

                  <Modal.Footer>
                    <Button
                      type="submit"
                      slot="close"
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>

                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}