import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Botones Flutter'),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [

              ElevatedButton(
                onPressed: () {
                  print("Elevated presionado");
                },
                child: const Text("Elevated Button"),
              ),

              const SizedBox(height: 15),

              TextButton(
                onPressed: () {
                  print("Text presionado");
                },
                child: const Text("Text Button"),
              ),

              const SizedBox(height: 15),

              OutlinedButton(
                onPressed: () {
                  print("Outlined presionado");
                },
                child: const Text("Outlined Button"),
              ),
            ],
          ),
        ),
      ),
    );
  }
}