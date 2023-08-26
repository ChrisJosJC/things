import { ScrollView } from 'react-native'
import { ListItem, Icon } from '@rneui/themed'
import React = require('react')

interface List {
    title: string
    icon: string
}

type ListType = List[]

const list: ListType = [
    {
        title: 'Preach',
        icon: 'presentation'
    },
    {
        title: 'Departures',
        icon: 'airplane-takeoff'
    },
    {
        title: 'Preach',
        icon: 'presentation'
    },
    {
        title: 'Departures',
        icon: 'airplane-takeoff'
    },
    {
        title: 'Preach',
        icon: 'presentation'
    },
    {
        title: 'Departures',
        icon: 'airplane-takeoff'
    },
    {
        title: 'Preach',
        icon: 'presentation'
    },
    {
        title: 'Departures',
        icon: 'airplane-takeoff'
    },
]

export default function List() {

    return (
        <ScrollView>
            {
                list.map((item, i) => (
                    <ListItem key={i}>
                        <Icon name={item.icon} type="material-community" color="grey" />
                        <ListItem.Content>
                            <ListItem.Title>{item.title}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                ))
            }
        </ScrollView>
    )
}