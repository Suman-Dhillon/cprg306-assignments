export default function Item({ name, quantity, category }){
    return (
        <div class = "p-2 m-4 bg-slate-900 max-w-sm">
            <h2 class = "text-xl text-white font-bold">{name}</h2>
            <p class = "text-sm text-white">Buy {quantity} in {category}</p>
        </div>
    );
}