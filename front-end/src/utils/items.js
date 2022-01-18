export function MapItemsToCategories(categories, items) {
    var list = [];

    categories.forEach((cat) => {
        let newCat = {
            title: cat.title,
            items: []
        }

        items.forEach((item) => {
            if(cat.id_list.indexOf(item.type) != -1)
                newCat.items.push(item);
        });

        list.push(newCat);
    });

    return list;
}