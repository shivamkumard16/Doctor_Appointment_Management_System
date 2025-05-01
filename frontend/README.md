# MeetMyDoc Frontend

This is the frontend for the MeetMyDoc application, built with React, React Router, and Tailwind CSS.

## Getting Started

### Installation

```sh
npm install
```

### Development

```sh
npm run dev
```

### Build

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Project Structure

```
frontend/
  src/
    App.jsx
    main.jsx
    index.css
    assets/
    components/
    context/
    pages/
  public/
  index.html
  package.json
  tailwind.config.js
  vite.config.js
```

## Example Usage

### Routing

The main routes are defined in [`App.jsx`](src/App.jsx):

- `/` - Home page
- `/doctors` - List all doctors
- `/doctors/:speciality` - List doctors by speciality
- `/appointment/:docId` - Book appointment with a doctor
- `/my-profile` - View and edit user profile
- `/my-appointments` - View user's appointments
- `/login` - Login or sign up
- `/about` - About page
- `/contact` - Contact page

### Example: Booking an Appointment

1. Go to `/doctors` and select a doctor.
2. Click on a doctor card to go to `/appointment/:docId`.
3. Select a date and time slot.
4. Click "Book an Appointment".

### Example: Editing Profile

1. Go to `/my-profile`.
2. Click "Edit" to update your information.
3. Click "Save Information" to save changes.

### Example: Viewing Appointments

1. Go to `/my-appointments` to see your upcoming appointments.

---

For more details, see the source files in the [`src`](src) directory.