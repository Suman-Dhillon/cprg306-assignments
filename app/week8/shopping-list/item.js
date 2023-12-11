export default function Item({item, onSelect}){
    return (
        <li onClick={()=> onSelect(item)} class="p-2 m-4 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer text-center  text-white">
            <h2 class = "text-xl font-bold">{item.name}</h2>
            <div class= "text-sm">{` Buy ${item.quantity} in ${item.category}`}</div>
        </li>
    );
}