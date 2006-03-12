function userreview_change_class(idPrefix, newClass) {
    _userreview_change_class = true;
    for (var i=0; i<11; i++) {
        element_id = idPrefix + i;
        identity=document.getElementById(element_id);
        identity.className=newClass;
    }
}

function userreview_select_vote(thiselement, element_number_base, userreview_option_css_class, userreview_selected_css_class, hidden_element, new_value) {
    userreview_change_class(element_number_base, userreview_option_css_class); 
    thiselement.className = userreview_selected_css_class;
    hiddenFieldToChange = document.getElementById(hidden_element);
    hiddenFieldToChange.value = new_value;
    //alert('changed ' + hiddenFieldToChange.name + ' to ' + hiddenFieldToChange.value);
}