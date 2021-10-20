$(() => {

    $("#qnform").submit(function() {
        const qn = $("#question").val();

        $.post('/8ball', { "question": qn })
            .done(reqeustDone)
            .fail(reqFailed);

        return false;
    });

    function reqeustDone(data) {
        console.log(data);
        $('#question').val(JSON.parse(data)).focus();
        $('#question').keyup(function() {
            $(this).val('');
            $('#question').off("keyup");
        });
    }

    function reqFailed(xhr, status, except) {
        console.log(xhr, status, except);
        $('#question').val('Error occured!');
    }
});