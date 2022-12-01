import * as React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
    Avatar,
    Grid,
    List as Lists,
    ListItem,
    ListItemAvatar,
    ListItemText,
    styled,
} from '@mui/material';

interface AvatarProps {
    title?: string;
    description?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onDoubleClick? : React.MouseEventHandler<HTMLInputElement>;
    onMouseOver?: React.MouseEventHandler<HTMLInputElement>;
}

const List = styled(Lists)({
    width: '100%',
    maxWidth: 360,
    marginTop: 1,
    marginLeft: 1,
    marginRight: 1,
    // boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;'
})

const ListItemTexts = styled(ListItemText)({
cursor : "pointer"
})

const Discretion = styled('span')({
    fontSize: "12px",
    cursor : "pointer"
})

export const AvatarComponent: React.FC<AvatarProps> = (props: any) => {
    const { title, description, onClick, onDoubleClick, onMouseOver } = props;
    return (
        <List onClick={onClick} onDoubleClick={onDoubleClick}  onMouseOver={onMouseOver} >
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <AccountCircleIcon />
                    </Avatar>
                </ListItemAvatar>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <ListItemTexts >
                        {title}
                    </ListItemTexts>
                    <Discretion >
                        {description}
                    </Discretion>
                </Grid>
            </ListItem>
        </List >

    );
}
