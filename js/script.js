function Transaction(name, deposit, initial_deposit, widthrawal) {
    this.name = name,
        this.deposit = deposit,
        this.initial_deposit = initial_deposit,
        this.widthrawal = widthrawal
}

Transaction.prototype.fulltrasaction = function () {
    return this.name + this.deposit + this.initial_deposit + this.widthrawal;

}

jQuery(document).ready(function () {
    jQuery('form#myform').submit(function (event) {
        event.preventjQueryDefault();


        var username = $("input#name").val();
        var deposit = $("input#deposit").val();
        var initial = $("input#initial").val();
        var withdraw = $("input#withdraw").val();

        $('#name').append(username)

        function onsubmit() {
            var total = deposit + initial;
            var balance = total - withdraw
            return balance

        }
        onsubmit()
        $('#balance').append(balance)

    })


})