import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { DateTypeListTransfer } from "./list-trasnfer";

interface Props {
    title: React.ReactNode;
    items: DateTypeListTransfer[];
    numberOfChecked: (items: DateTypeListTransfer[]) => number;
    handleToggle: (value: DateTypeListTransfer) => () => void;
    checked: DateTypeListTransfer[]
}

export const customList = ({ title, items, numberOfChecked, handleToggle, checked }: Props) => {
    return ((
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
                {items.map((value: DateTypeListTransfer) => {
                    const labelId = `transfer-list-all-item-${value}-label`;

                    return (
                        <ListItemButton
                            sx={{
                                margin: 0,
                                padding:0
                            }}
                            key={value.id}
                            role="listitem"
                            onClick={handleToggle(value)}
                        >
                            <ListItemIcon >
                                <Checkbox
                                    sx={{
                                        padding: 1
                                    }}
                                    checked={checked.includes(value)}
                                    tabIndex={-1}
                                    disableRipple
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`${value.name}`} />
                        </ListItemButton>
                    );
                })}
            </List>
        </Card>
    ))
}
