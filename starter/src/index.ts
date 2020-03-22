enum FieldType {
    InputField,
    TextAreaField,
    DateField,
    EmailField,
    SelectField,
    CheckboxField 
}

interface Field{
    name: string;
    label: string;
    type: string;
    value: any;
    render():void;
}

class FieldLabel{

}

class InputField implements Field{
    name = "InputField";
    
}