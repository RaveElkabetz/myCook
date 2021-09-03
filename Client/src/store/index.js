import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      categories: [
        {
          id: "1",
          imageLink:
            "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emojipedia/132/shallow-pan-of-food_1f958.png",
          title: "תבשילי קדרה",
        },
        {
          id: "2",
          imageLink:
            "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emojipedia/132/pretzel_1f968.png",
          title: "מאפים",
        },
        {
          id: "3",
          imageLink:
            "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emojipedia/132/takeout-box_1f961.png",
          title: "אוכל אסייתי",
        },
        {
          id: "4",
          imageLink:
            "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emojipedia/132/cupcake_1f9c1.png",
          title: "קינוחים",
        },
        {
          id: "5",
          imageLink:
            "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emojipedia/132/cut-of-meat_1f969.png",
          title: "בשר ועוף",
        },
        {
          id: "6",
          imageLink:
            "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/emojipedia/132/green-salad_1f957.png",
          title: "סלטים",
        },
      ],
    };
  },
  getters: {
    categories(state) {
      return state.categories;
    },
    category(state) {
      return (categoryId) => {
        //debugger;
        console.log("enterd getter in store state");
        // function checkId(category) {
        //   console.log(category.id);
        //   console.log(categoryId);
        //   if (category.id == categoryId) return true;
        //   return false;
        // }

        // = state.categories.find(checkId);
        var i = null;
        for (let index = 0; index < state.categories.length; index++) {
          const category = state.categories[index];
          if (categoryId === undefined) continue;
          if (category.id === categoryId.trim()) {
            i = category;
          }
        }

        return i;
      };
    },
  },
});
export default store;
