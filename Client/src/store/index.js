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
      cooks: [
        {
          cookName: "אורז",
          id: "1",
          fullRecipeDesc: "לבשל את האורז עם המים והמלח למשך 20 דק",
          userAddedEmail: "test@test.com",
          category: "3",
          imageLink:
            "https://hips.hearstapps.com/vidthumb/images/delish-u-rice-2-1529079587.jpg",
          ingredients: ["אורז", "מים", "מלח"],
        },
        {
          cookName: "סטייק",
          id: "2",
          fullRecipeDesc:
            "לוקחים את נתחי האנטריקוט, מתבלים במלח ופלפל ושמים על המנגל כ3 דק",
          userAddedEmail: "test@test.com",
          category: "5",
          imageLink:
            "https://images1.calcalist.co.il/PicServer2/20122005/61916/meat-bar002095126_l.jpg",
          ingredients: ["נתחי אנטריקוט", "מלחr", "פלפל שחור גרוס"],
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
    cooks(state) {
      return state.cooks;
    },
    cooksByCategory(state) {
      return (categoryId) => {
        console.log("enterd getter of cook by category");
        console.log(categoryId);
        //debugger;
        var cooksByCategoryRet = [];
        for (let i = 0; i < state.cooks.length; i++) {
          const cook = state.cooks[i];
          if (categoryId === undefined) continue;
          if (cook.category.trim() === categoryId.trim()) {
            cooksByCategoryRet.push(cook);
          }
        }
        console.log(cooksByCategoryRet);
        return cooksByCategoryRet;
      };

      //להמשיך מכאן
      //use this function on the cooksList page
    },
    cook(state) {
      return (cookId) => {
        console.log("enterd getter of cook by category");
        console.log(state);
        console.log(cookId);
        for (let i = 0; i < state.cooks.length; i++) {
          const cook = state.cooks[i];
          if (cookId === undefined) continue;
          if (cook.id.trim() === cookId.trim()) {
            return cook;
          }
        }
      };
    },
  },
});
export default store;
