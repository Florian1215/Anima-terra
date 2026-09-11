import phonenumbers
from rest_framework import serializers


class ContactSerializer(serializers.Serializer):
    nom = serializers.CharField()
    email = serializers.EmailField()
    telephone = serializers.CharField(validators=[])
    raison = serializers.CharField()
    message = serializers.CharField()

    @staticmethod
    def validate_telephone(value):
        try:
            phone = phonenumbers.parse(value, "FR")

            if not phonenumbers.is_valid_number(phone):
                raise serializers.ValidationError("Veuillez renseigner un numéro de téléphone valide.")
        except phonenumbers.NumberParseException:
            raise serializers.ValidationError("Veuillez renseigner un numéro de téléphone valide.")
        return value
