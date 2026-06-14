function cekQuiz(jawaban){

    if(jawaban=="benar"){
        document.getElementById("hasilQuiz").innerHTML=
        "🎉 Benar! Membalas sapaan merupakan sikap yang baik.";
    }else{
        document.getElementById("hasilQuiz").innerHTML=
        "❌ Coba lagi ya!";
    }

}


function cekKomentar(){

    let komentar =
    document.getElementById("komen").value.toLowerCase();

    if(
        komentar.includes("bodoh") ||
        komentar.includes("tolol") ||
        komentar.includes("jelek")
    ){

        document.getElementById("hasilKomentar").innerHTML=
        "❌ Komentar kurang sopan.";

    }else{

        document.getElementById("hasilKomentar").innerHTML=
        "🌸 Komentar positif dan santun!";

    }

}


function vote(jawaban){

    if(jawaban=="iya"){

        document.getElementById("voteResult").innerHTML=
        "💖 Terima kasih! Kamu peduli pada etika.";

    }else{

        document.getElementById("voteResult").innerHTML=
        "✨ Terima kasih atas pendapatmu.";

    }

}


function janji(){

    document.getElementById("janjiText").innerHTML=
    "🌸 Saya berjanji untuk menghormati sesama dan menggunakan bahasa yang santun.";

}


function motivasi(){

    let pesan = [

        "🌸 Kesopanan adalah cerminan diri.",

        "💖 Hormati orang lain sebagaimana kamu ingin dihormati.",

        "✨ Kata-kata baik membawa kedamaian.",

        "🌷 Sapaan sederhana dapat membuat hari seseorang lebih baik."

    ];

    let random =
    Math.floor(Math.random()*pesan.length);

    document.getElementById("motivasiText").innerHTML=
    pesan[random];

}