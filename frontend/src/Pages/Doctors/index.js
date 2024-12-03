import React, { useState } from "react";
import { Box, Grid, TextField, Typography, Pagination } from "@mui/material";
import DoctorCard from "../../Components/DoctorCard";
import DoctorDetail from "../../Components/DoctorsDetail";
import Dr1 from '../../Assests/images/doctor2.png';
import borderImage from '../../Assests/images/border222.png'; 
// Sample doctor data (only cardiologists)
const doctorsData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiology",
    experience: 12,
    contact: "123-456-7890",
    bio: "Experienced cardiologist specializing in heart health. Focuses on preventative cardiology and cardiovascular health.",
    photo: Dr1,
    Qualification: "MD, Cardiology - Harvard Medical School",
    certifications: ["Board Certified in Cardiology", "Fellow of the American College of Cardiology (FACC)"],
    clinic_address: "123 Heart Health Clinic, Downtown City",
    availability: ["Monday", "Wednesday", "Friday"],
    languages: ["English", "Spanish"],
  },
  {
    id: 2,
    name: "Dr. John Smith",
    specialization: "Cardiology",
    experience: 8,
    contact: "987-654-3210",
    bio: "Cardiologist with a focus on treating complex cases and advanced heart conditions. Expertise in interventional cardiology.",
    photo: "/images/doctor2.jpg",
    Qualification: "MD, Cardiology - Stanford University",
    certifications: ["Board Certified in Cardiology", "Advanced Cardiac Life Support (ACLS)"],
    clinic_address: "456 Heart Institute, West Side",
    availability: ["Tuesday", "Thursday", "Saturday"],
    languages: ["English"],
  },
  {
    id: 3,
    name: "Dr. Emily Williams",
    specialization: "Cardiology",
    experience: 10,
    contact: "555-123-4567",
    bio: "Specializing in cardiology and heart disease prevention. Dedicated to providing personalized care for patients with cardiovascular risk factors.",
    photo: "/images/doctor3.jpg",
    Qualification: "MD, Cardiology - Mayo Clinic School of Medicine",
    certifications: ["Board Certified in Cardiology", "Certified in Heart Disease Prevention"],
    clinic_address: "789 CardioCare Center, Central City",
    availability: ["Monday", "Thursday", "Friday"],
    languages: ["English", "French"],
  },
  {
    id: 4,
    name: "Dr. Michael Lee",
    specialization: "Pediatrics",
    experience: 15,
    contact: "321-654-9870",
    bio: "Pediatrician with a passion for children's health and well-being. Focuses on preventive care and early childhood development.",
    photo: "/images/doctor4.jpg",
    Qualification: "MD, Pediatrics - Johns Hopkins University",
    certifications: ["Board Certified in Pediatrics", "Certified Pediatrician, American Academy of Pediatrics (AAP)"],
    clinic_address: "123 Kids Health Clinic, East Side",
    availability: ["Monday", "Wednesday", "Friday"],
    languages: ["English", "Mandarin"],
  },
  {
    id: 5,
    name: "Dr. Olivia Brown",
    specialization: "Dermatology",
    experience: 10,
    contact: "654-321-0987",
    bio: "Experienced dermatologist specializing in skin care, acne treatment, and cosmetic dermatology. Passionate about skin cancer prevention.",
    photo: "/images/doctor5.jpg",
    Qualification:"MD, Dermatology - University of California, Los Angeles",
    certifications: ["Board Certified in Dermatology", "Fellow of the American Academy of Dermatology (AAD)"],
    clinic_address: "321 SkinCare Clinic, Northside",
    availability: ["Tuesday", "Thursday", "Saturday"],
    languages: ["English", "Portuguese"],
  },
  {
    id: 6,
    name: "Dr. James Turner",
    specialization: "Orthopedics",
    experience: 20,
    contact: "432-765-9876",
    bio: "Orthopedic surgeon with over 20 years of experience in joint replacement, sports medicine, and trauma surgery.",
    photo: "/images/doctor6.jpg",
    Qualification: "MD, Orthopedics - University of Michigan",
    certifications: ["Board Certified in Orthopedic Surgery", "Fellow of the American Academy of Orthopedic Surgeons (AAOS)"],
    clinic_address: "654 Orthopedic Center, West End",
    availability: ["Monday", "Tuesday", "Thursday"],
    languages: ["English", "German"],
  },
  {
    id: 7,
    name: "Dr. Lisa Green",
    specialization: "Gynecology",
    experience: 12,
    contact: "567-890-1234",
    bio: "Expert in gynecology with a focus on women's reproductive health and wellness. Provides comprehensive care from adolescence through menopause.",
    photo: "/images/doctor7.jpg",
    Qualification: "MD, Gynecology - University of California, San Francisco",
    certifications: ["Board Certified in Gynecology", "Fellow of the American College of Obstetricians and Gynecologists (ACOG)"],
    clinic_address: "456 Women's Health Clinic, South Street",
    availability: ["Monday", "Thursday", "Friday"],
    languages: ["English", "Spanish"],
  },
  {
    id: 8,
    name: "Dr. David Carter",
    specialization: "Neurology",
    experience: 18,
    contact: "321-987-6540",
    bio: "Neurologist specializing in brain disorders, epilepsy, and stroke management. Focuses on advanced diagnostic techniques.",
    photo: "/images/doctor8.jpg",
    Qualification: "MD, Neurology - Cleveland Clinic",
    certifications: ["Board Certified in Neurology", "Certified in Stroke Management"],
    clinic_address: "987 Brain Health Center, Downtown",
    availability: ["Tuesday", "Wednesday", "Friday"],
    languages: ["English", "Italian"],
  },
  {
    id: 9,
    name: "Dr. Rachel Adams",
    specialization: "Endocrinology",
    experience: 14,
    contact: "876-543-2109",
    bio: "Endocrinologist specializing in diabetes management, thyroid diseases, and metabolic disorders.",
    photo: "/images/doctor9.jpg",
    Qualification: "MD, Endocrinology - Mayo Clinic",
    certifications: ["Board Certified in Endocrinology", "Certified Diabetes Educator"],
    clinic_address: "654 Endocrine Care Clinic, East End",
    availability: ["Monday", "Thursday", "Saturday"],
    languages: ["English", "Arabic"],
  },
  {
    id: 10,
    name: "Dr. Benjamin White",
    specialization: "Ophthalmology",
    experience: 10,
    contact: "987-321-6540",
    bio: "Ophthalmologist specializing in vision correction surgery, cataract treatment, and general eye care.",
    photo: "/images/doctor10.jpg",
    Qualification: "MD, Ophthalmology - Johns Hopkins University",
    certifications: ["Board Certified in Ophthalmology", "Fellow of the American Academy of Ophthalmology (AAO)"],
    clinic_address: "123 Vision Care Clinic, Downtown",
    availability: ["Tuesday", "Wednesday", "Friday"],
    languages: ["English", "French"],
  },
];


const DoctorsPage = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    setPage(1); // Reset to the first page on search
  };

  const handleSelectDoctor = (id) => {
    const doctor = doctorsData.find((doc) => doc.id === id);
    setSelectedDoctor(doctor);
  };

  const handleCloseDetail = () => {
    setSelectedDoctor(null);
  };

  const filteredDoctors = doctorsData.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchQuery) ||
      doctor.specialization.toLowerCase().includes(searchQuery) ||
      doctor.experience.toString().includes(searchQuery)
  );

  const paginatedDoctors = filteredDoctors.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box sx={{ padding: 4 }} className="container">
          
           <Typography
      variant="h4"
      align="center"
      sx={{ fontWeight: "bold", color: '#212f3d'}}
    >
Get to Know Our Heart <span className="Headingcolor">Health Specialists</span>
    </Typography>

    <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            mb: 4,
          }}
        >
          <img
            src={borderImage}
            alt="Border"
            width={450}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              paddingBottom:"20px"
            }}
          />
        </Box>
      <TextField
        fullWidth
        placeholder="Search cardiologists by name, experience..."
        variant="outlined"
        value={searchQuery}
        onChange={handleSearch}
        sx={{ mb: 4}}
      />

      {selectedDoctor ? (
        <DoctorDetail doctor={selectedDoctor} onClose={handleCloseDetail} />
      ) : (
        <Box sx={{ minHeight: "calc(100vh - 80px)" }}> {/* Adjusted height to prevent footer overlap */}
          {filteredDoctors.length === 0 ? (
            <Typography
              variant="h6"
              color="text.secondary"
              textAlign="center"
              sx={{ paddingBottom: 4 }} // Added padding to prevent overlap
            >
              No cardiologists found matching your search criteria.
            </Typography>
          ) : (
            <>
              <Grid container spacing={2}>
                {paginatedDoctors.map((doctor) => (
                  <Grid item xs={12} sm={6} md={4} key={doctor.id}>
                    <DoctorCard doctor={doctor} onSelect={handleSelectDoctor} />
                  </Grid>
                ))}
              </Grid>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <Pagination
                  count={Math.ceil(filteredDoctors.length / itemsPerPage)}
                  page={page}
                  onChange={(_, value) => setPage(value)}
                  color="primary"
                />
              </Box>
            </>
          )}
        </Box>
      )}
    </Box>
  );
};

export default DoctorsPage;
