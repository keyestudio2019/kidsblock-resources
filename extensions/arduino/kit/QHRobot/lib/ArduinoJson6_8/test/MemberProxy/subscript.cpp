// ArduinoJson - arduinojson.org
// Copyright Benoit Blanchon 2014-2018
// MIT License

#include <ArduinoJson6_8.h>
#include <catch.hpp>

using namespace ARDUINOJSON_NAMESPACE;

TEST_CASE("MemberProxy::operator[]") {
  DynamicJsonDocument doc(4096);
  MemberProxy<JsonDocument&, const char*> mp = doc["hello"];

  SECTION("set integer") {
    mp["world"] = 42;

    REQUIRE(doc.as<std::string>() == "{\"hello\":{\"world\":42}}");
  }
}
