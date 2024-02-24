import React from 'react';
import { View, Text, StyleSheet, Modal,  } from 'react-native';
import { blackText, blueText, colorTheme, grayText } from '../../constant';
import Header from '../Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const IconName = [
    {
        name: 'cards-heart',
        title: 'Psychiatrist'
    },
    {
        name: 'tooth',
        title: 'Psychologist'
    },
    {
        name: 'bone',
        title: 'Therapist'
    },
    {
        name: 'brain',
        title: 'Counselor'
    },
    {
        name: 'ear-hearing',
        title: 'PMHNP'
    },
    {
        name: 'stomach',
        title: 'PMHN'
    },
    {
        name: 'brain',
        title: 'Neuropsychologist'
    },
    {
        name: 'stomach',
        title: 'PPA'
    },
    {
        name: 'lungs',
        title: 'SAC'
    },
    {
        name: 'bone',
        title: 'Art Therapist'
    },
    {
        name: 'stomach',
        title: 'Music Therapist'
    },
    {
        name: 'skull',
        title: 'RT'
    },
    {
        name: 'fingerprint',
        title: 'MFT'
    },
    {
        name: 'face-woman-profile',
        title: 'School Counselor'
    },
    {
        name: 'seat-legroom-extra',
        title: 'FP'
    },
    {
        name: 'bone',
        title: 'Geriatric Psychiatrist'
    },
    {
        name: 'baby-carriage',
        title: 'CAP'
    },
    {
        name: 'flower-tulip',
        title: 'Development'
    },
    {
        name: 'flower',
        title: 'Behavioral'
    },
    {
        name: 'account',
        title: 'TraumaTherapy'
    },

]

function RenderCategory(params) {
    return (
        <>
            {
                chunkArray(IconName, 4).map((row, rowIndex) => {
                    return (
                        <View key={rowIndex} style={[{ marginBottom: 25, flexDirection: 'row', justifyContent: 'space-between' }]}>
                            {row.map((name, itemIndex) =>
                                <View key={itemIndex} style={{ alignItems: 'center', justifyContent: 'center', flexGrow: 1, }}>
                                    <View style={{ backgroundColor: colorTheme.iconBackGroundColor, borderRadius: 50, }}>
                                        <MaterialCommunityIcons name={name.name} color={colorTheme.primaryColor} size={25} style={{ padding: 15, color: colorTheme.primaryColor }} />
                                    </View>
                                    <View style={{width:'70%'}}>
                                        <Text numberOfLines={1} style={[styles.smallText, { color: 'black',textAlign:'center' }]}>{name.title}</Text>
                                    </View>
                                </View>
                            )}
                        </View>
                    )
                })
            }
        </>
    )
}

const names = [
    'Alice', 'Bob', 'Charlie', 'David',
    'Eva', 'Frank', 'Grace', 'Henry',
    'Ivy', 'Jack', 'Kate', 'Leo'
];

const chunkArray = (array, chunkSize) => {
    return Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, index) =>
        array.slice(index * chunkSize, (index + 1) * chunkSize)
    );
};

const Category = ({ modalVisible, setModalVisible }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <Header leftIconName header={'Category'} titleMargin={40} isModal setModalVisible={setModalVisible} />
                </View>
                {/* Main Content */}
                <View style={styles.content}>
                    <RenderCategory />
                </View>
                {/* Footer */}
                <View style={styles.footer}>
                </View>
            </View>
        </Modal >
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colorTheme.appBackGroundColor,
        flex: 1,
        justifyContent: 'space-between',
    },
    header: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 5
    },
    content: {
        flex: 1,
        width: '90%',
        alignSelf: 'center',
        marginTop: 20
    },
    footer: {
        padding: 10,
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center'
    },
    bigText: {
        fontSize: blackText.fontSize,
        color: blackText.color,
        fontWeight: blackText.fontWeight
    },
    smallText: {
        fontSize: grayText.fontSize,
        color: grayText.color,
        fontWeight: grayText.fontWeight
    },
    blueText: {
        fontSize: blueText.fontSize,
        color: blueText.color,
        fontWeight: blueText.fontWeight
    },
    textInput: {
        borderRadius: 10,
        backgroundColor: "white",
        padding: 7,
        borderWidth: 1,
        borderColor: "#d3d2d6",
        height: 200,
        textAlignVertical: 'top',
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: colorTheme.primaryColor
    },
});

export default Category;
