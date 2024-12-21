import Heading from "../Common/Heading"
import { OutlinedInput, InputAdornment, FormControl, Select, MenuItem, Button } from '@mui/material';
import { useState } from 'react';
import { CallOutlined, ConstructionOutlined, EmailOutlined, MessageOutlined, Person2Outlined } from "@mui/icons-material";

const ContactForm = () => {
    const [formData, setFormData] = useState({ fullname: '', email: '', message: '', phone: '', service: 'Renovation' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="contact--form w-full">
            <Heading text="Let’s Build Together!" custom_css="text-start" />
            <p className="mt-[0.6vw]">We’re just a message away from starting something amazing!</p>
            <form className="mt-[2vw] flex flex-col gap-[0.6vw]" onSubmit={handleSubmit}>
                <div className="flex gap-[0.6vw]">
                    <FormControl className="w-2/5">
                        <OutlinedInput
                            id="fullname"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            placeholder="Full Name"
                            size="small"
                            startAdornment={
                                <InputAdornment position="start">
                                    <Person2Outlined className="text-para" sx={{ fontSize: "var(--paragraph-size)", color: 'var(--primary)' }} />
                                </InputAdornment>
                            }
                            sx={{
                                backgroundColor: 'white',
                                color: '#414141',
                                fontSize: "var(--paragraph-size)",
                                borderRadius: '0.6vw'
                            }}
                        />
                    </FormControl>
                    <FormControl className="w-3/5">
                        <OutlinedInput
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            size="small"
                            startAdornment={
                                <InputAdornment position="start">
                                    <EmailOutlined className="text-para" sx={{ fontSize: "var(--paragraph-size)", color: 'var(--primary)' }} />
                                </InputAdornment>
                            }
                            sx={{
                                backgroundColor: 'white',
                                color: '#414141',
                                fontSize: "var(--paragraph-size)",
                                borderRadius: '0.6vw'
                            }}
                        />
                    </FormControl>
                </div>
                <div className="flex gap-[0.6vw]">
                    <FormControl className="w-3/5">
                        <Select
                            id="fullname"
                            name="fullname"
                            value={formData.service}
                            size="small"
                            startAdornment={
                                <InputAdornment position="start">
                                    <ConstructionOutlined className="text-para" sx={{ fontSize: "var(--paragraph-size)", color: 'var(--primary)' }} />
                                </InputAdornment>
                            }
                            sx={{
                                backgroundColor: 'white',
                                color: '#414141',
                                fontSize: "var(--paragraph-size)",
                                borderRadius: '0.6vw'
                            }}
                        >
                            <MenuItem value="Interior Design">Interior Design</MenuItem>
                            <MenuItem value="Renovation">Renovation</MenuItem>
                            <MenuItem value="Furniture Desig">Furniture Design</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className="w-2/5">
                        <OutlinedInput
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            size="small"
                            startAdornment={
                                <InputAdornment position="start">
                                    <CallOutlined className="text-para" sx={{ fontSize: "var(--paragraph-size)", color: 'var(--primary)' }} />
                                </InputAdornment>
                            }
                            sx={{
                                backgroundColor: 'white',
                                color: '#414141',
                                fontSize: "var(--paragraph-size)",
                                borderRadius: '0.6vw'
                            }}
                        />
                    </FormControl>
                </div>
                <FormControl fullWidth>
                    <OutlinedInput
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        size="small"
                        startAdornment={
                            <InputAdornment position="start">
                                <EmailOutlined className="text-para" sx={{ fontSize: "var(--paragraph-size)", color: 'var(--primary)' }} />
                            </InputAdornment>
                        }
                        sx={{
                            backgroundColor: 'white',
                            color: '#414141',
                            fontSize: "var(--paragraph-size)",
                            borderRadius: '0.6vw'
                        }}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <OutlinedInput
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        size="small"
                        startAdornment={
                            <InputAdornment position="start">
                                <MessageOutlined sx={{ fontSize: "var(--paragraph-size)", color: 'var(--primary)' }} />
                            </InputAdornment>
                        }
                        multiline
                        rows={2}
                        sx={{
                            backgroundColor: 'white',
                            color: '#414141',
                            fontSize: "var(--paragraph-size)",
                            borderRadius: '0.6vw'
                        }}
                    />
                </FormControl>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        alignSelf: 'flex-start',
                        textTransform: 'uppercase',
                        fontWeight: '600',
                        fontFamily: 'InterVariable, system-ui, sans-serif',
                        padding: '0.6vw 1.2vw',
                        fontSize: 'var(--paragraph-size)',
                        backgroundColor: 'var(--primary)',
                        borderRadius: '0.6vw',
                        marginTop: '1vw',
                        '&:hover': {
                            backgroundColor: 'var(--gray-shade-41)',
                        },
                    }}
                >
                    Send Message
                </Button>
            </form>

        </div>
    )
}

export default ContactForm