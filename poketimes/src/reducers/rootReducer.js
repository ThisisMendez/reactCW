
const initState = { 
  posts: [
    {id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. In eget.'},
    {id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis porttitor.'},
    {id: '3', title: 'a helix Fossil was Found', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec.'}
  ]
}

const rootReducer = (state = initState, action) => { 
  if (action.type === 'DELETE_POST') { 
    let newPosts = state.posts.filter(post => { 
      return action.id !== post.id 
    }); 
    return { 
      ...state, 
      posts: newPosts
    }
  }
  return state; 
}

export default rootReducer