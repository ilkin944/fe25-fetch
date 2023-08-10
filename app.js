const melumatGetir = async () => {
    try {
        const request = await fetch('http://localhost:3000/istifadeciler');
        const response = await request.json()
        console.log(response);


        if (response.length > 0) {
            response.forEach(melumat => {
                document.getElementById("tbody").innerHTML += `
                <tr>
                    <td>${melumat.ad}</td>
                    <td>${melumat.soyad}</td>
                    <td>${melumat.telefon}</td>
                    <td>${melumat.email}</td>
                    <td>
                        <button onclick="deleteUser(${melumat.id})">istifadecini sil</button>
                    </td>
                </tr>`
            })
        } else {
            alert('Kayıt bulunamadı');
        }


    } catch (error) {
        console.error(error);
    }
}

melumatGetir();


const yeniMelumatElaveEt = async () => {
    try {
        const req = await fetch('http://localhost:3000/istifadeciler', {
            method: 'POST',
            body: JSON.stringify({
                ad: document.getElementById("t1").value,
                soyad: document.getElementById("t2").value,
                telefon: document.getElementById("t3").value,
                email: document.getElementById("t4").value,
            }),
            headers: { 'Content-Type': "application/json; charset=UTF-8" }
        })
        const res = await req.json();
        console.log(res);
    } catch (error) {
        console.error(error);
    }
}


const deleteUser = async(id)=>{
    try {
        const req = await fetch(`http://localhost:3000/istifadeciler/${id}`,{
            method:'DELETE'
        })
        if (req.status==200) {
            alert("melumat silindi")
        }else{
            alert("xeta bas verdi")
        }
    } catch (error) {
        console.error(error);
    }
}



document.getElementById("btn").addEventListener("click", ()=>{
    yeniMelumatElaveEt()
    melumatGetir();
})



const masinlar = ['mustang', 'f-150', 'expedition'];

const [car, , suv] = masinlar;
console.log(car, suv);