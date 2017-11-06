package com.akoterle.springbootreact

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.security.SecurityAutoConfiguration

@SpringBootApplication(exclude = arrayOf(SecurityAutoConfiguration::class))
class SpringBootReactApplication

fun main(args: Array<String>) {
    SpringApplication.run(SpringBootReactApplication::class.java, *args)
}
