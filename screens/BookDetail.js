import React, { useEffect, useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const BookDetail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { id } = route.params;

    const [book, setBook] = useState(null);

    const mockBookData = {
        1: {
            id: 1,
            name: "พัฒนา Application ด้วย React และ React Native",
            price: "330",
            image: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week9/book-1.jpg",
        },
        2: {
            id: 2,
            name: "พัฒนาเว็บแอพพลิเคชันด้วย Firebase ร่วมกับ React",
            price: "229",
            image: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week9/book-2.jpg",
        },
        3: {
            id: 3,
            name: "พัฒนา Web Apps ด้วย React Bootstrap + Redux",
            price: "349",
            image: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week9/book-3.jpg",
        },
    };

    const fetchBookDetails = (id) => {
        const fetchedBook = mockBookData[id];
        if (fetchedBook) {
            setBook(fetchedBook);
        }
    };

    useEffect(() => {
        fetchBookDetails(id);
    }, [id]);

    const deleteBook = () => {
        const { id } = route.params;
        //REMOVE BOOK
         BookStorage.removeItem(id);
        //REDIRECT TO
        navigation.navigate("Book");
    
    };

    const confirmDelete = () => {
        return Alert.alert(
            "ยืนยันการลบ?",
            "คุณแน่ใจหรือไม่ว่าจะลบรายการนี้?",
            [
                { text: "ยกเลิก" },
                { text: "ยืนยัน", onPress: () => { deleteBook();} },
            ]
        );
    };

    const TopRightMenu = ({ b }) => (
        <View style={{ flexDirection: "row", width: 100, justifyContent: "space-around" }}>
            <TouchableOpacity onPress={() => { navigation.navigate("BookForm", { "id" :b.id}); }}>
                <FontAwesome name="edit" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={confirmDelete}>
                <FontAwesome name="trash" size={30} color="black" />
            </TouchableOpacity>
        </View>
    );
    
    const onLoad = async () => {             
        const { id } = route.params;
        let b = await BookStorage.readItemDetail(id);
        setBook(b);
        navigation.setOptions({ headerRight: () => ( <TopRightMenu b={b} /> ) }); 
    };
    
    useEffect(() => {
        if (book) {
            console.log("Setting navigation options");
            navigation.setOptions({
                headerRight: () => <TopRightMenu id={book.id} />,
            });
        }
    }, [navigation, book]);

    if (!book) {
        return <View></View>;
    }

    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <TouchableOpacity onPress={() => { navigation.navigate("Book");}}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={{ flex: 1, resizeMode: "contain", aspectRatio: 1 / 1 }} source={{ uri: book.image }} />
                </View>
            </TouchableOpacity>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20, marginVertical: 10 }}> {book.name} </Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "green", fontSize: 20 }}>{book.price}</Text>
                    <Text style={{ paddingTop: 6 }}> บาท</Text>
                </View>
            </View>
        </View>
    );
};

export default BookDetail;

