import {
    Box,    
    FormControl,
    MenuItem,
    Typography,
    Select,
    InputLabel,
} from "@mui/material";

const DropDown = ({ type, handleChange, types }) => {
    return (
        <Box mt={5}>
            <Typography variant="h4" mb={3}>
                Tipo de peliculas
            </Typography>
            <FormControl fullWidth>
                <InputLabel>Tipos</InputLabel>
                <Select Value={type} label="Tipos" onChange={handleChange}>
                    {types.length > 0 &&
                        types.map(({ url, name }) => (
                            <MenuItem value={url}>{name}</MenuItem>
                        ))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default DropDown;