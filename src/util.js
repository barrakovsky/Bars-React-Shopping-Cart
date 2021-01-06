export default function formatCurrency(num){
    if(!num) 
        return '$' + 0
    else
        return "$" + Number(num.toFixed(1)).toLocaleString() + " ";
}