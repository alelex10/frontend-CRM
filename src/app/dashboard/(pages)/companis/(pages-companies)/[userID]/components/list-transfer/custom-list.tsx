import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

interface Props {
    title: React.ReactNode;
    items: readonly number[];
    numberOfChecked: (items: readonly number[]) => number;
    handleToggle: (value: number) => () => void;
}

export const customList = ({ title, items, numberOfChecked, handleToggle }: Props) => (
    <Card>
        <CardHeader
            sx={{ px: 2, py: 1 }}

            title={title}
            subheader={`${numberOfChecked(items)} selected`}
        />
        <Divider />
        <List
            sx={{
                width: 200,
                height: 230,
                bgcolor: 'background.paper',
                overflow: 'auto',
            }}
            dense
            component="div"
            role="list"
        >
            {items.map((value: number) => {
                const labelId = `transfer-list-all-item-${value}-label`;

                return (
                    <ListItemButton
                        key={value}
                        role="listitem"
                        onClick={handleToggle(value)}
                    >
                        <ListItemIcon>
                            <Checkbox
                                // checked={checked.includes(value)}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{
                                    'aria-labelledby': labelId,
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={`List item ${value + 1}`} />
                    </ListItemButton>
                );
            })}
        </List>
    </Card>
);
